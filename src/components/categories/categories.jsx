import CategoryItem from "../category-item/category-item";
import './categories.style.scss';

const Categories = (props) => {
    return (
        <div className="categories-container">
            {props.categories.map(category => (
                <CategoryItem key={category.id} title={category.title} imageUrl={category.imageUrl} />
            ))}
        </div>
    )
};

export default Categories;
