(function () {
    const PropertiesReader = require('properties-reader');

    var _property = null;

    /**
     * Set the path of the properties file, and initialize the {@link PropertiesReader}.
     * 
     * @param {string} path
     */
    exports.setPath = (path) => {
        _property = PropertiesReader(path);
    }

    /**
     * Get the value from the properties file by the key.
     * 
     * @param {string} key
     * @return property value
     */
    exports.getProperty = (key) => {
        return _property == null
                ? "" : _property.get(key);
    }
}());







