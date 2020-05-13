module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  checkItemValidity(item)
  checkValueValidity(item)
  let { enhancement } = item
  enhancement < 20 && enhancement++
  return { ...item, enhancement };
}

function fail(item) {
  checkItemValidity(item)
  checkValueValidity(item)
  let { enhancement } = item
  if (enhancement < 15) {
    enhancement -= 5
  } else if (enhancement > 16) {
    enhancement -= 1
  } else {
    enhancement -= 10
  }
  return { ...item, enhancement };
}

function repair(item) {
  checkItemValidity(item)
  checkValueValidity(item)
  return { ...item, durability: 100  };
}

function get(item) {
  return { ...item };
}

function checkItemValidity(item) {
  const { name, enhancement, durability } = item
  if (!name || !enhancement || !durability) {
    throw new Error("Please submit a valid item for repair.")
  } else if (typeof name !== "string") {
    throw new Error("Item name should be a string")
  } else if (typeof enhancement !== "number") {
    throw new Error("Item enhancement should be a number")
  } else if (typeof durability !== "number") {
    throw new Error("Item durability should be a number")
  }
}

function checkValueValidity(item) {
  const { enhancement, durability } = item
  if (enhancement < 0 || enhancement > 20) {
    throw new Error("please provide proper value for item enhancement")
  } else if (durability < 0 || durability > 100) {
    throw new Error("please provide proper value for item durability")
  }
}
