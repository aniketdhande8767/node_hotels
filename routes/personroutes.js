const express = require('express');
const router = express.Router();
const person = require('./../models/person');


router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newperson = new person(data);
    // save the new person to the daabase
    const response = await newperson.save();
    console.log('data saved')
    res.status(200).json({ response });

  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'internal server error' })
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await person.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }
})

router.get('/:worktype', async (req, res) => {

  try {
    const worktype = req.params.worktype //extract the work type from the url parameter
    if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {
      const response = await person.find({ work: worktype })
      console.log('response fetched');
      res.status(200).json(response);

    } else {
      res.status(404).json('invalid work type')
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'internal server error' })
  }
})


router.put('/:id', async (req, res) => {
  try {
    const personid = req.params.id;//extract the id from the url parameter
    const updatedPersonData = req.body;//update data from the person
    const response = await person.findByIdAndUpdate(personid, updatedPersonData, {
      new: true,//return the updated document
      runValidators: true,//run mongoose validaion
    })

    if (!response) {
      return res.status(404).json({ error: 'person not found' })
    }
    console.log('data wwas an updated');
    res.status(200).json(response);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'internal server error' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const personid = req.params.id;//extract the id from the url parameter

    // assuming you have a person model
    const response  = await person.findByIdAndDelete(personid);
     if (!response) {
      return res.status(404).json({ error: 'person not found' })
    }
    console.log('data wwas an updated');
    res.status(200).json({message:'person data was an deleted'});
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'internal server error' })
  }
})


module.exports = router;