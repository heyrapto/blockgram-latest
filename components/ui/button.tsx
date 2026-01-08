import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles =
        'px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2';

    const variants: Record<ButtonVariant, string> = {
        primary: 'bg-[#0278E0] hover:bg-[#0267C9] text-white',
        secondary:
            'bg-transparent hover:bg-gray-800/50 text-white border border-gray-700',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;