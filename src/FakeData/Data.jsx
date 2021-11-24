let Data = [
    { _id: "MongoDB", children: [] },
    { _id: "dbm", children: [] },
    { _id: "Databases", children: ["MongoDB", "dbm"] },
    { _id: "Languages", children: ["C", "Python"] },
    { _id: "Programming", children: ["Databases", "Languages"] },
    { _id: "Books", children: ["Programming"] }
];

export default Data