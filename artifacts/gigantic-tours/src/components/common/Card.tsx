import { ReactNode, MouseEventHandler } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  className?: string;
  imageHeight?: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
  hover?: boolean;
}

const Card = ({
  title,
  description,
  image,
  imageAlt,
  children,
  className = '',
  imageHeight = 200,
  onClick,
}: CardProps) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className="relative w-full overflow-hidden" style={{ height: `${imageHeight}px` }}>
          <img
            src={image}
            alt={imageAlt || title || 'Card image'}
            className="object-cover w-full h-full"
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

export default Card;
