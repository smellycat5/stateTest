import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid } from "@mui/material";

const Form = () => {
  const [taskInput, setTaskInput] = useState({
    name: "",
    position: "",
    number: "",
  });
  const [tasks, setTasks] = useState([]);
  const [button, setButton] = useState(true);
  const [indexC, setIndex] = useState("");

  const handleSubmit = () => {
    setTasks([...tasks, taskInput]);
    setTaskInput({ name: "", position: "", number: "" });
  };

  const handleEdit = () => {
    console.log(indexC);
    const newState = tasks.map((task, index) => {
      if (index === indexC) {
        return taskInput;
      }
      return task;
    });

    // const newState = tasks.filter((_, i) => i === indexC);


    setTasks(newState);
    setTaskInput({ name: "", position: "", number: "" });
    setButton(true);
  };

  const handleUpdateButtonClick = () => {
    setButton(false);
  };
  const removeTask = (index) => {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
  };

  const editTask = (index) => {
    const editedTask = tasks.find((_, i) => i == index);
    setTaskInput(editedTask);
    setIndex(index);
    handleUpdateButtonClick();
  };
  return (
    <>
      <Container maxWidth="sm">
        {/* <form onSubmit={handleSubmit}> */}
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <TextField
              label="Name"
              color="secondary"
              variant="outlined"
              margin="normal"
              focused
              name="name"
              value={taskInput.name}
              onChange={(e) =>
                setTaskInput({ ...taskInput, name: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Position"
              color="secondary"
              variant="outlined"
              margin="normal"
              focused
              name="number"
              value={taskInput.position}
              onChange={(e) =>
                setTaskInput({ ...taskInput, position: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Number"
              color="secondary"
              variant="outlined"
              margin="normal"
              focused
              name="number"
              value={taskInput.number}
              onChange={(e) =>
                setTaskInput({ ...taskInput, number: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            {button ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: "20px" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{ marginTop: "20px" }}
                onClick={handleEdit}
              >
                Update
              </Button>
            )}
          </Grid>
        </Grid>asdfadfaasdfa
        {/* </form> */}
      </Container>
      <Container maxWidth="sm">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            {tasks.map((task, index) => (
              <li key={index}>
                Name: {task.name}, Position: {task.position}, Number:{" "}
                {task.number}
                <button onClick={() => editTask(index)}>Edit</button>
                <button onClick={() => removeTask(index)}>Remove</button>
              </li>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Form;
