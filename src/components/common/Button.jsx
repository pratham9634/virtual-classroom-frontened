export default function Button({ children, className = "", ...props }) {
return (
<button
className={`inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium hover:opacity-90 active:opacity-80 ${className}`}
{...props}
>
{children}
</button>
);
}