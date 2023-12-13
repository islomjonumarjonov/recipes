import { useState } from "react";
import { getTime } from "../utils/index";
// import { v4 as uuidv4 } from "uuid";
import Preview from "../components/Preview";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

import { useGlobalContext } from "../hooks/useGlobalContext";

function AddRecipe() {
  const { user } = useGlobalContext();
  console.log(user.uid);
  const nav = useNavigate();

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);

  const [state, setState] = useState(false);
  const [visibility, setVisibility] = useState(false);

  //ref
  const _title = useRef();
  const _method = useRef();
  const _cookingTime = useRef();
  const _ingredient = useRef();
  const _image = useRef();

  //functions
  const addIngredient = (e) => {
    e.preventDefault();
    const ing = _ingredient.current.value;
    setIngredient(ing);
    setTitle(_title.current.value);
    setCookingTime(_cookingTime.current.value);
    setMethod(_method.current.value);
    if (ing.trim()) {
      if (!ingredients.includes(ing)) {
        console.log(true);
        setIngredients((prev) => {
          return [...prev, ing];
        });
        _ingredient.current.value = "";
      } else {
        console.log(false);
        //toast EQUAL
      }
    } else {
      console.log("DD");
      //toast WRITE
    }
  };

  const addImage = (e) => {
    e.preventDefault();
    const img = _image.current.value;
    setImage(img);
    setTitle(_title.current.value);
    setCookingTime(_cookingTime.current.value);
    setMethod(_method.current.value);
    // const urlChecking = /(https?:\/\/.*\.(?:png|jpg))/;
    if (img.trim()) {
      console.log(true);
      if (!images.includes(img)) {
        // && urlChecking.test(img.trim())
        console.log(true);
        if (!images.length <= 4) {
          setImages((prev) => {
            return [...prev, img];
          });
        }
        setImage("");
        _image.current.value = "";
      } else if (images.includes(img)) {
        console.log(false);
        //toast EQUAL
        setImage("");
        _image.current.value = "";
      }
    } else {
      console.log(false);
      //toast WRITE
    }
  };
  console.log(images);
  const handlePreview = () => {
    if (title && method && cookingTime && ingredients.length && images.length) {
      document.getElementById("preview-modal").showModal();
    } else {
      //toast FILL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && method && cookingTime && ingredients.length && images.length) {
      const data = {
        title,
        method,
        cookingTime,
        ingredients,
        images,
        userId: user.uid,
      };
      const handleMore = () => {
        dispatch({ type: "DOC_ID", payload: id });
        useEffect(() => {
          dispatch({ type: "DOCS_CHANGE", payload: documents });
        }, [documents]);
        setVisibility(true);
        document.getElementById("my_modal_1").showModal();

        addDoc(collection(db, "recipes"), { ...data });

        setState(true);
      };
    } else {
      console.log(title);
      //toast FILL
    }
  };

  return (
    <div className="px-20 py-6">
      {visibility && (
        <Modal
          title={_title.current.value}
          ings={ingredients}
          imgs={images}
          time={cookingTime}
        />
      )}
      {state ? (
        <Navigate to="/" />
      ) : (
        <form>
          <h1 className="text-3xl">Create New Recipe:</h1>
          <label>
            <p className="text-xl">Title:</p>
            <input className="bg-lime-200" required ref={_title} type="text" />
          </label>
          <label>
            <p className="text-xl">Ingredients:</p>
            <input className="bg-lime-200" ref={_ingredient} type="text" />
            <button className="btn hover:btn-outline" onClick={addIngredient}>
              Add
            </button>
            <p className="flex">
              Ingredients:
              {ingredients.length
                ? ingredients.map((ing, index, arr) => {
                    return (
                      <span key={ing}>
                        {ing}
                        {index === arr.length - 1 ? "." : ","}
                      </span>
                    );
                  })
                : "No Ingredients"}
            </p>
          </label>
          <label>
            <p className="text-xl">Cooking Time:</p>
            <input
              className="bg-lime-200"
              required
              ref={_cookingTime}
              type="number"
            />
          </label>
          <label>
            <p className="text-xl">Method:</p>
            <input className="bg-lime-200" required ref={_method} type="text" />
          </label>
          <label>
            <p className="text-xl">Images URL:</p>
            <input className="bg-lime-200" ref={_image} type="url" />
            <button className="btn hover:btn-outline" onClick={addImage}>
              Add
            </button>
            <p className="flex gap-2">
              images:
              {images.length
                ? images.map((image) => {
                    return (
                      <img
                        className="object-cover"
                        key={image}
                        src={image}
                        width={60}
                        height={60}
                      />
                    );
                  })
                : "no images"}
            </p>
          </label>
          <button className="btn bg-lime-200" onClick={handleSubmit}>
            Create
          </button>
          <button
            className="btn bg-lime-700"
            onClick={() => {
              handleMore();
            }}
          >
            Preview
          </button>
        </form>
      )}
    </div>
  );
}

export default AddRecipe;
