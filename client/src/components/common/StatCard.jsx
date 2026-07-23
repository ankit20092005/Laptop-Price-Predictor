function StatCard({
    title,
    value,
    icon: Icon,
}) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 transition hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-gray-600 font-medium">
                    {title}
                </h2>
                <Icon
                    className="text-blue-600"
                    size={22}
                />

            </div>
            <p className="text-4xl font-bold text-blue-600">

                {value}

            </p>
        </div>
    );
}

export default StatCard;