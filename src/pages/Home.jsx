import useCollection from "../hooks/useCollection";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { IoIosTime } from "react-icons/io";
import { NavLink } from "react-router-dom";
function Home() {
  const { user } = useGlobalContext();
  const { documents } = useCollection("recipes", ["userId", "==", user.id]);
  const { dispatch } = useGlobalContext();
  const [visibility, setVisibility] = useState(false);
  const [id, setId] = useState(null);

  //delete
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "recipes", id));
  };

  const handleMore = (id) => {
    dispatch({ type: "DOC_ID", payload: id });
    useEffect(() => {
      dispatch({ type: "DOCS_CHANGE", payload: documents });
    }, [documents]);
    setVisibility(true);
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <div className="px-20">
      {visibility && <Modal docs={documents} id={id} />}
      <h1 className="text-3xl py-6">All Recipes:</h1>
      {documents ? (
        <ul className="flex gap-3">
          {documents.map((doc) => {
            const { method, cookingTime } = doc;
            if (doc.userId == user.uid) {
              return (
                <li className="card w-96 shadow-xl" key={doc.id}>
                  <figure>
                    <img width={400} height={400} src={doc.images[0]} alt="" />
                  </figure>
                  <div className="card-bodY px-3 pb-6 flex flex-col">
                    <h3 className="card-title">{doc.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">
                        <IoIosTime />
                      </span>
                      <p>{cookingTime} minutes</p>
                    </div>
                    <p>{method.slice(0, 100) + "..."}</p>
                    <div className="flex justify-between">
                      <NavLink
                        to="readMore"
                        className="btn"
                        onClick={() => {
                          handleMore(doc.id);
                        }}
                      >
                        Read more
                      </NavLink>
                      <button
                        className="btn bg-red-600 text-white"
                        onClick={() => {
                          handleDelete(doc.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  {/* {navigate ? <Navigate to="readMore" /> : null} */}
                </li>
              );
            }
          })}
        </ul>
      ) : (
        "NO INGREDIANTS YET"
      )}
    </div>
  );
}

export default Home;
