import "./NewCollections.css";
import new_collections from "../Assets/new_collections";
import Item from "../Item/Item";

export default function NewCollections() {
  return (
    <div className="container">
      <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
          {new_collections.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
