# Qubic-UI

Qubic-UI is a React component library built with TypeScript, leveraging Material-UI and Tailwind CSS for styling. This library aims to provide reusable and customizable components to streamline your development process.

## Features

- **React**: Built with the latest version of React.
- **TypeScript**: Strongly typed components for better developer experience and fewer runtime errors.
- **Material-UI**: Utilizes Material-UI for consistent and modern design.
- **Tailwind CSS**: Integrated with Tailwind CSS for utility-first styling.

## Installation

To install Qubic-UI, you need to add it to your project using npm or yarn:

```bash
npm install qubic-ui
# or
yarn add qubic-ui
```

## Usage

After installing the package, you can start using the components in your React project. Below is an example of how to use the `CardItem` component:

### Importing and Using CardItem

```tsx
import React from 'react';
import CardItem from 'qubic-ui';

const App = () => {
  return (
    <div>
      <CardItem 
        description="Example Description" 
        value="Example Value" 
        imageLink="path/to/image.png" 
        imageAlt="Example Image" 
      />
    </div>
  );
};

export default App;
```

## Development

To contribute to the development of Qubic-UI, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/qubic/ts-react-library.git
```

2. **Install dependencies**:

```bash
cd qubic-ui
npm install
```

3. **Build the package**:

```bash
npm run build
```

4. **Publish the package**:

```bash
npm publish
```

## Acknowledgments

- [Material-UI](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
