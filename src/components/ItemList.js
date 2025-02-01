import { useDispatch } from "react-redux";
import { MENU_ITEM_IMAGE } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }
  
  return items.map((item) => {
    return (
      <div
        key={item.card.info.id}
        className="p-2 m-2 border-gray-200 border-b-2 flex justify-between items-center"
      >
        <div className="w-9/12 text-left">
          <div className="py-2">
            <span className="font-bold">{item.card.info.name}</span> {"-"}{" "}
            <span className="font-bold">
              - ₹
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        </div>
        <div className="h-50 w-3/12 relative flex-shrink-0">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={MENU_ITEM_IMAGE + item.card.info.imageId}
          />
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg px-4 py-2 rounded-lg"
          onClick={() => handleAddItem(item)}>
            Add+
          </button>
        </div>
      </div>
    );
  });
};

export default ItemList;
