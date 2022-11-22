const FileIO = require('../fileIO');
const FileIO = require('../fileIO');

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const FileIO = new FileIO();
      const readFileSync = new readFileSync();

      axios.get.mockReturnValue (
        new Promise(function(resolve) {
          resolve({data: {}});
        })
      );
      expect(FileIO.search(readFileSync)).resolves.toEqual({})
      // TODO: Your code here
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
    });
  });
});
