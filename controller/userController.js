const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// accessing notes.json in db folder
const getNote = (req, res) => {
  fs.readFile(path.join(__dirname, '../db/notes.json'), 'utf8', (err, notes) => {
    if (err) {
      return res.status(500).json({err});
    }
    res.json(JSON.parse(notes));
  });
};

// posting a new note to db
const postNote = (req, res) => {

  const {title, text} = req.body;
  const id = uuidv4();

  if (title && text) {
//  read the notes.json 
    fs.readFile(path.join(__dirname, '../db/notes.json'), 'utf8', (err, notes) => {
//  check for errors if any
      if (err) {
        return res.status(500).json({err});
      }

      const data = JSON.parse(notes);

//  add data to the array from notes.json
      data.push({
        id,
       title,
       text,
      });
//  write the new array to the notes.json 
      fs.writeFile(path.join(__dirname, '../db/notes.json'), JSON.stringify(data, null, 2), (err) => {

        if (err) {
          return res.status(500).json({err});
        }
//  send newly added data to the front-end
        res.json({title, text});
      });

    });
  } else {
    res.status(400).json({error: 'Please enter Title and Text'});
  }

}

// deleting a note from db
const deleteNote = (req, res) => {
  fs.readFile(path.join(__dirname, '../db/notes.json'), 'utf8', (err, notes) => {
    if (err) {
      return res.status(500).json({err});
    }
    let noteList = JSON.parse(notes);
    
  const id = req.params.id;
  const refreshedList = noteList.filter((notes)=> notes.id !== id);
  
  fs.writeFile(path.join(__dirname, '../db/notes.json'), JSON.stringify(refreshedList, null, 2), (err) => {
    if (err) {
      return res.status(500).json({err});
    }
    res.send(`${id}'s note is successfully deleted`);
  });
});
}
  

module.exports = {
  getNote,
  postNote,
  deleteNote
};
