// import data from '../data/data.jsx';
import './card.css'
import { IoBagCheckOutline } from "react-icons/io5";



const Card = ({ result }) => {
	// console.log(result);
	return (
		<>
			<section className='card-container'>
				{result && result.length > 0 ? (
					result.map((item, id) => {
						const { img, newPrice, prevPrice, reviews, star, title } = item.props;

						return <div className='card' key={id}>
							<div className='product-image'>
								<img src={img} alt={title} />
							</div>

							<div className='title'>{title}
							</div>

							<div className='star-review'>
								<span className='stars'>
									<span>{star}</span>
									<span>{star}</span>
									<span>{star}</span>
									<span>{star}</span>
								</span>
								<span className='review'>{reviews}
								</span>
							</div>

							<div className='price-bag'>
								<div className='price'>
									<span className='prevPrice' >{prevPrice}</span>
									<span className='newPrice'>{newPrice}</span>
								</div>

								<div className='bag-logo'>
									<IoBagCheckOutline className='bag-icon' />
								</div>
							</div>
						</div>
					})) : <>No Product by this name</>
				}
			</section>
		</>
	)
}

export default Card;

