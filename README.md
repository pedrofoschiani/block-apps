# block-apps

O plugin recebe quais pacotes ele precisa bloquear. Após isso, o aplicativo, ao executar em segundo, detecta a abertura desses pacotes, caso for um pacote que precisa ser bloqueado, ele exibe uma tela sobreposta a execução do pacote. Ele não impede a excução do pacote, só impede o usuário de interagir, fazeendo com que ele ainda seja executado em segundo plano no celular

## Install

```bash
npm install block-apps
npx cap sync
```

## API

<docgen-index>

* [`setBlockedPackages(...)`](#setblockedpackages)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setBlockedPackages(...)

```typescript
setBlockedPackages(options: { packages: string[]; }) => Promise<void>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ packages: string[]; }</code> |

--------------------

</docgen-api>
