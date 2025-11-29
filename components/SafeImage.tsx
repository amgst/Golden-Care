import React, { useState, useRef, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackColor?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc,
  fallbackColor = 'bg-slate-200',
  className = '',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Prevent error from bubbling and showing in console
    e.preventDefault();
    e.stopPropagation();
    
    if (!hasError && imgRef.current) {
      setHasError(true);
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
      } else {
        setImgSrc(undefined);
        // Remove the src to prevent further error attempts
        if (imgRef.current) {
          imgRef.current.src = '';
        }
      }
    }
  };

  useEffect(() => {
    // Reset error state when src changes
    if (src !== imgSrc) {
      setHasError(false);
      setImgSrc(src);
    }
  }, [src, imgSrc]);

  // Use placeholder service as fallback if no custom fallback provided
  const getPlaceholderUrl = () => {
    if (fallbackSrc) return fallbackSrc;
    // Use a simple data URI or placeholder service
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e2e8f0' width='400' height='300'/%3E%3Ctext fill='%2394a3b8' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E`;
  };

  if (!imgSrc && hasError) {
    return (
      <div 
        className={`${fallbackColor} flex items-center justify-center ${className}`}
        role="img"
        aria-label={alt || 'Image placeholder'}
      >
        <svg 
          className="w-12 h-12 text-slate-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={imgSrc || getPlaceholderUrl()}
      alt={alt}
      className={className}
      onError={handleError}
      onLoad={(e) => {
        // Suppress any potential load errors
        if (imgRef.current && imgRef.current.complete && imgRef.current.naturalHeight === 0) {
          handleError(e as any);
        }
      }}
      {...props}
    />
  );
};

export default SafeImage;

