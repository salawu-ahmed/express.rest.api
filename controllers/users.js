let users =[
    {
        firstName: "john",
        lastName: "doe",
        age: 25,
        id: "kaflgv96926"
    },
    {
        firstName: "yoshi",
        lastName: "mario",
        age: 18,
        id: "abvira48796578"
    }
]

export const getUsers = (req, res)=>{
    console.log(users);
    res.send(users)
}

export const createUser = (req, res)=>{
    console.log('POST ROUTE REACHED');
    const user = req.body;
    users.push(user);
    res.send(`user with the firstName ${req.body.firstName} added to the database successfully`);
}

export const getUser = (req, res)=>{
    const {id} = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
}

export const deleteUser = (req, res) =>{
    const id = req.params.id
    const updatedUsers = users.filter((user) => user.id !== id)
    console.log(`user with the id ${id} deleted from database`);
    res.send(updatedUsers)
}

export const updateUser = (req, res) => {
    const id = req.params.id
    const user = users.find((user) => user.id === id)
    const {firstName, lastName, age} = req.body
    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (age) user.age = age
    console.log(`user with the id ${id} has been updated`);
    res.send('successfully updated')
}