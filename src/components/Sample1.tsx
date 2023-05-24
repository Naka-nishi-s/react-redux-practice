import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";
import { useSelector } from "react-redux";

export const Sample1 = () => {
  // ディスパッチを呼び出す
  const dispatch = useDispatch();

  // セレクターを呼び出す
  const selector: any = useSelector((state) => state);

  /**
   * dispatchに登録したaddItemを起動し、カートに追加する
   * @param id 商品のID
   * @param name 商品の名前
   * @param price 商品の値段
   * @return なし
   */
  const addCart = (id: number, name: string, price: number) => {
    dispatch(addItem({ id, name, price }));
  };

  /**
   * カートの現在の状態を見る
   * @param なし
   * @return なし
   */
  const watchCart = () => {
    console.log(selector.cart.items);
  };

  return (
    <div>
      <h1>Sample1</h1>
      <button onClick={() => addCart(1, "sample", 300)}>追加</button>
      <button onClick={watchCart}>カートの状態を見る</button>
    </div>
  );
};
