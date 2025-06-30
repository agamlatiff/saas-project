interface Users {
  total: string;
  icon: string
  description: string;
}

const usersData : Users[] = [
  {
    total: "262K",
    icon: '+',
    description: "A modest number to start off the metrics section.",
  },
  {
    total: '102M',
    icon: '+',
    description: 'A modest number to start off the metric section',
  },
    {
    total: '99',
    icon: '%',
    description: 'A modest number to start off the metric section',
  }
];

const Users = () => {
  return <div className="flex items-center gap-20 py-20 bg-white w-full mx-auto justify-center px-5 flex-col md:flex-row">
    {usersData.map((item, index) => (
      <div key={index} className="flex flex-col gap-5 text-center">
        <h2 className="text-5xl font-semibold text-stone-800">{item.total}<span className="text-indigo-600">{item.icon}</span></h2>
        <p className="text-stone-600 text-md w-3/4 mx-auto">{item.description}</p>
      </div>
    ))}
  </div>;
};

export default Users;
