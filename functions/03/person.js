const personDataLog = ({ firstName = "John", lastName = "Doe", age = 33 }) => {
  return `My name is ${firstName} ${lastName}. I'm ${age} years old.`;
};

export default personDataLog;