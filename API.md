# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2WithEfs <a name="Ec2WithEfs" id="cdk-aws-ec2-efs.Ec2WithEfs"></a>

#### Initializers <a name="Initializers" id="cdk-aws-ec2-efs.Ec2WithEfs.Initializer"></a>

```typescript
import { Ec2WithEfs } from 'cdk-aws-ec2-efs'

new Ec2WithEfs(scope: Construct, id: string, props: Ec2WithEfsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aws-ec2-efs.Ec2WithEfs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-aws-ec2-efs.Ec2WithEfs.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-aws-ec2-efs.Ec2WithEfs.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-aws-ec2-efs.Ec2WithEfsProps">Ec2WithEfsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-aws-ec2-efs.Ec2WithEfs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-aws-ec2-efs.Ec2WithEfs.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-aws-ec2-efs.Ec2WithEfs.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-aws-ec2-efs.Ec2WithEfsProps">Ec2WithEfsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aws-ec2-efs.Ec2WithEfs.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-aws-ec2-efs.Ec2WithEfs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aws-ec2-efs.Ec2WithEfs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-aws-ec2-efs.Ec2WithEfs.isConstruct"></a>

```typescript
import { Ec2WithEfs } from 'cdk-aws-ec2-efs'

Ec2WithEfs.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-aws-ec2-efs.Ec2WithEfs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aws-ec2-efs.Ec2WithEfs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-aws-ec2-efs.Ec2WithEfs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### Ec2WithEfsProps <a name="Ec2WithEfsProps" id="cdk-aws-ec2-efs.Ec2WithEfsProps"></a>

#### Initializer <a name="Initializer" id="cdk-aws-ec2-efs.Ec2WithEfsProps.Initializer"></a>

```typescript
import { Ec2WithEfsProps } from 'cdk-aws-ec2-efs'

const ec2WithEfsProps: Ec2WithEfsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aws-ec2-efs.Ec2WithEfsProps.property.fileSystem">fileSystem</a></code> | <code>aws-cdk-lib.aws_efs.FileSystem</code> | The file system to mount *. |
| <code><a href="#cdk-aws-ec2-efs.Ec2WithEfsProps.property.instance">instance</a></code> | <code>aws-cdk-lib.aws_ec2.Instance</code> | The instance to mount file system it must have yum. |
| <code><a href="#cdk-aws-ec2-efs.Ec2WithEfsProps.property.configureConnection">configureConnection</a></code> | <code>boolean</code> | To configure the efs to allow connection to default port from ec2. |

---

##### `fileSystem`<sup>Required</sup> <a name="fileSystem" id="cdk-aws-ec2-efs.Ec2WithEfsProps.property.fileSystem"></a>

```typescript
public readonly fileSystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_efs.FileSystem

The file system to mount *.

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-aws-ec2-efs.Ec2WithEfsProps.property.instance"></a>

```typescript
public readonly instance: Instance;
```

- *Type:* aws-cdk-lib.aws_ec2.Instance

The instance to mount file system it must have yum.

Amazo Linux 2 is recommended.
*

---

##### `configureConnection`<sup>Optional</sup> <a name="configureConnection" id="cdk-aws-ec2-efs.Ec2WithEfsProps.property.configureConnection"></a>

```typescript
public readonly configureConnection: boolean;
```

- *Type:* boolean

To configure the efs to allow connection to default port from ec2.

Defaults too false.
If you set it to true then it's not needed to allow connections manually.
*

---



