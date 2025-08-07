import Image from "../../upload/Image";
import Input from "../../input/Input";
import "../Product.css";
const Category = () => {
  const categoryData = [
    {
      id: 1,
      component1: (
        <Input
          title={"Главный текст"}
          text={"Школьная мебель"}
          editData={"Изменить"}
        />
      ),
      component2: (
        <Input
          title={"Главный текст"}
          text={"Школьная мебель"}
          editData={"Готово"}
        />
      ),
      image: <Image />,
    },
    {
      id: 2,
      component1: (
        <Input
          title={"Главный текст"}
          text={"Школьная мебель"}
          editData={"Изменить"}
        />
      ),
      component2: (
        <Input
          title={"Главный текст"}
          text={"Школьная мебель"}
          editData={"Готово"}
        />
      ),
      image: <Image />,
    },
    {
      id: 3,
      component1: (
        <Input
          title={"Главный текст"}
          text={"Школьная мебель"}
          editData={"Изменить"}
        />
      ),
      component2: (
        <Input
          title={"Главный текст"}
          text={"Школьная мебель"}
          editData={"Готово"}
        />
      ),
      image: <Image />,
    },
    {
      id: 4,
      component1: (
        <Input
          title={"Главный текст"}
          text={"Школьная мебель"}
          editData={"Изменить"}
        />
      ),
      component2: (
        <Input
          title={"Главный текст"}
          text={"Школьная мебель"}
          editData={"Готово"}
        />
      ),
      image: <Image />,
    },
  ];
  return (
    <>
      <div className="category-page">
        <ul>
          {categoryData?.map((value) => (
            <li key={value.id} className="category-list">
              <div className="image-container">{value.image}</div>
              <div className="input-container">
                {value.component1}  
                {value.component2}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Category;
