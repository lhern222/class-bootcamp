const Logger = require("../logger");

const colors = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m"
};


//mock function allow you to test the link between code by erasing the actual implemetation 

//mocking is primarily used in unit testing. An object under test may have dependencis on other (complex) objects. 
//To isolate the behavior of the object you want to test you replace the other objects by mocks that simulate the behavior of the real objects, 
// this is useful if the real objects are impractical to incorprate into the unit test 
describe("Logger", () => {
  describe("colors", () => {
    it("should print in black", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.black(message);

      expect(mock).toBeCalledWith(colors.black, message);

      mock.mockRestore();
    });

    it("should print in red", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.red(message); // this triggers the mock by selecting the color that it wants to trigger 

      expect(mock).toBeCalledWith(colors.red, message);

      mock.mockRestore();
    });

    it("should print in green", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.green(message);

      expect(mock).toBeCalledWith(colors.green, message);

      mock.mockRestore();
    });

    it("should print in yellow", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.yellow(message);

      expect(mock).toBeCalledWith(colors.yellow, message);

      mock.mockRestore();
    });

    it("should print in blue", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.blue(message);

      expect(mock).toBeCalledWith(colors.blue, message);

      mock.mockRestore();
    });

    it("should print in magenta", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.magenta(message);

      expect(mock).toBeCalledWith(colors.magenta, message);

      mock.mockRestore();
    });

    it("should print in cyan", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.cyan(message);

      expect(mock).toBeCalledWith(colors.cyan, message);

      mock.mockRestore();
    });

    it("should print in white", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.white(message);

      expect(mock).toBeCalledWith(colors.white, message);

      mock.mockRestore();
    });
  });
});
