import { db } from "../db.js";

export const getUsers = (_, res) =>{
    const q = "SELECT * FROM users";

    db.query(q,(err, data)=>{
        if (err) return res.json(err);
        
        return res.status(200).json(data);
    });
};

export const addUser = (req, res) =>{
    const q = "INSERT INTO users ('name', 'email', 'phone', 'brith-date') VALUES (?)";
    
    const values =[
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.brithDate,
    ]

    db.query(q, req.body, (err, data)=>{
        if (err) return res.json(err);

        return res.status(200).json('User added successfully');
    });
}