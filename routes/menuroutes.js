const express = require('express');
const router = express.Router();
const menuitem = require('./../models/menu')

router.get('/', async (req, res) => {
  try {
    const data = await menuitem.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }
})


router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newmenu = new menuitem(data);
    // save the new person to the daabase
    const response = await newmenu.save();
    console.log('data saved')
    res.status(200).json({ response });

  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'internal server error' })
  }
})

router.get('/:teste', async (req, res) => {
  try {
    const testename = req.params.teste //extract the work type from the url parameter
    if (testename == 'sweet' || testename == 'spicy' || testename == 'sour') {
      const response = await menuitem.find({ teste: testename })
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
    const menuid = req.params.id;//extract the id from the url parameter
    const updatedPersonData = req.body;//update data from the person
    const response = await menuitem.findByIdAndUpdate(menuid, updatedPersonData, {
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
    const menuid = req.params.id;//extract the id from the url parameter
    const response = await menuitem.findByIdAndDelete(menuid);
    if (!response) {
      return res.status(404).json({ error: 'person not found' })
    }
    console.log('data wwas an deleted sucsesfull');
    res.status(200).json({ message: 'person data was an deleted' });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'internal server error' })
  }
})
module.exports = router;