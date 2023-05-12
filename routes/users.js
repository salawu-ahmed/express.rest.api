import express from "express";
const router = express.Router()

import {createUser, deleteUser, getUser, getUsers, updateUser} from '../controllers/users.js'


// all routes here are starting with /users

router.get('/', getUsers)
//adding users to our database 
router.post('/', createUser)

// retrieving users with a specific id 
router.get('/:id', getUser)

// delete a user
router.delete('/:id', deleteUser)

// updating a users information
router.patch('/:id', updateUser)

export default router