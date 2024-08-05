# Documentation

## Table of Contents

* [Description](#description)
* [Technologies](#technologies)
* [Install](#install)
* [Usage](#usage)
* [Authors](#authors)
* [License](#license)

## Description
The Modal React component creates a versatile and customisable modal window for usage in React applications. This component, which supports a variety of customisations and stylistic options, enables developers to easily construct modal dialogues for showing additional material, notifications, or interactive features in their apps.

## Technologies

* React V18.2.0
* React-Dom V18.2.0
* PropTypes V15.8.1
* NPM V10.2.3
* NodeJS V20.10.0
* VS Code V1.87.2

## Install
To install, you can use [npm](https://npmjs.org/):

    $ npm install --save @engydev/modalreact



## Usage
### Example
```jsx
import React, { useState } from 'react';
import { Modal } from '@engydev/modalreact';
import '@engydev/modalreact/dist/style.css';

const App = () => {

    const [lastActiveElement, setLastActiveElement] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setLastActiveElement(document.activeElement);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false)
        if (lastActiveElement) {
            lastActiveElement.focus();
        }
    };

    return (

    <>

    <button onClick={openModal}>Open modal</button>


    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Employee Created"
        titleClose="Close"
    />

    </>

    )

}


export default App

```

### Step by step

1. Import component and style file

```jsx
import { Modal } from '@engydev/modalreact';
import '@engydev/modalreact/dist/style.css';

```

2. Create open/close state and save the currently active element with useState hook
```jsx
import React, { useState } from 'react';

const App = () => {

    const [lastActiveElement, setLastActiveElement] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

  ...

}

```


3. Create functions open/close

```jsx
    const openModal = () => {
        setLastActiveElement(document.activeElement);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false)
        if (lastActiveElement) {
            lastActiveElement.focus();
        }
    };
```

4. Add component in render with props

```jsx
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Modal Component"
        titleClose="Close"
    />
```

5. Add children to the component

```jsx
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Modal Component"
        titleClose="Close"
    >
        <p>Hello world !</p>
    </Modal>
```

6. Control modal by changing state

```jsx
    <button onClick={openModal}>Open modal</button>
```

7. Choose to customize styles and modal

You can choose to :
* Display the icon with : `showCloseIcon={false}`
* Delete the style importation ~~``import '@engydev/modalreact/dist/style.css';``~~ and add your own style using : `{styles.yourStyle}`

```jsx
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        customModal={styles.modalContent}
        customContainerInformations={styles.containerInformations}
        customTitle={styles.title}
        customBtnClose={styles.btnClose}
        customIconClose={styles.picture}
        title="Your Message Has Been Sent"
        titleClose="Close the message"
        showCloseIcon={false}
    >
        <p>Hello world !</p>
    </Modal>
```

## Authors
Engy Essam

## License
ISC © [Engy Essam](https://github.com/engy-dev)