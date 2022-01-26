module.exports = {
  // setupFiles: ['./__mocks__/fileMock.js'],
  preset: 'react-native',
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    //   // 'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
    //   // 'node_modules/(?!@react-native|react-native)',
    //   // 'node_modules/(?!((jest-)?react-native|react-navigation|@react-navigation/.*))',
    // 'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)',
    'node_modules/(?!(jest-)?@?react-native|react-native-vector-icons|@react-native-community|@react-navigation)',
  ],
};
