export default function StatsCard({ title, value }) {
return (
<div className="p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800">
<h4 className="text-gray-500 text-sm">{title}</h4>
<p className="text-2xl font-bold">{value}</p>
</div>
);
}