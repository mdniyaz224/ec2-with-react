# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Deploying to EC2

Pushes to `main` build the app and copy `dist/` to your EC2 web directory. Add these GitHub Actions variables: `EC2_HOST` (instance public IP/DNS), `EC2_USER` (SSH user), and `EC2_DEPLOY_PATH` (web directory, e.g. `/var/www/html`). Add `EC2_SSH_KEY` as a secret containing the complete contents of your `.pem` private key, including its `BEGIN` and `END` lines.

Install a web server and `rsync` on EC2, and ensure the SSH user can write to the deployment directory. The workflow looks up the SSH host key with `ssh-keyscan`.
