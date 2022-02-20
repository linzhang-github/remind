# Remind

![CI](https://github.com/luvsic3/remind/workflows/CI/badge.svg) 
![Azure Static Web Apps CI/CD](https://github.com/luvsic3/remind/workflows/Azure%20Static%20Web%20Apps%20CI/CD/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=unhandledrejection_mindx&metric=alert_status)](https://sonarcloud.io/dashboard?id=unhandledrejection_mindx) 

Remind is a free, open source mindmap editor based on React.

![](./illustrate.jpg)

Try it on https://remind.applet.ink

## Status

 * Basic editor feature have been implemented (undo, redo, navigation, drag, CRUD topic, shortcut support)
 * Support basic customization

This project is under active development, check it out at [project panel](https://github.com/luvsic3/remind/projects)

## Installation

```shell
npm i remindjs
```

## Quick Start

```JavaScript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Mindmap } from 'remindjs';

const App = () => {
  function onChange(root) {
    console.log(root)
  }
  return (
    <div>
      <Mindmap onChange={onChange} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## API
Mindmap props

| prop     | type                         | description                    | default | optional |
| -------- | ---------------------------- | ------------------------------ | ------- | -------- |
| value    | TopicData                    | control mindmap value          | -       | true     |
| readonly | boolean                      | is mindmap readonly            | false   | true     |
| onChange | (value: TopicData) => void   | listen to mindmap value change | -       | true     |
| locale   | 'en' &#124; 'cn' &#124; 'ja' | language localization          | en      | true     |
| theme    | Theme                        | custom theme                   | -       | true     |

TopicData

```typescript
interface TopicData {
  id: string
  title: string
  children?: TopicData[]
  side?: 'left' | 'right'
}
```

Theme

```typescript
interface Theme {
  link: {
    stroke: string;
    strokeWidth: number;
  };
  mainColor: string;
  canvasWidth: number;
  canvasHeight: number;
}
```

## License

[MIT License](https://github.com/luvsic3/remind/blob/master/LICENSE)
