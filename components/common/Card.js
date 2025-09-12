import PropTypes from 'prop-types';
import Image from 'next/image';

const Card = ({
  title,
  description,
  image,
  imageAlt,
  children,
  className = '',
  imageHeight = 200,
  onClick,
}) => {
  return (
    <div 
      className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className="relative w-full" style={{ height: `${imageHeight}px` }}>
          <Image
            src={image}
            alt={imageAlt || title || 'Card image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      <div className="p-4">
        {title && <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>}
        {description && <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>}
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  imageHeight: PropTypes.number,
  onClick: PropTypes.func,
};

export default Card;