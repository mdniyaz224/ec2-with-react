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

The site has Home, Deployment, and Tech Stack pages. Navigation uses hash-based routes, so all pages work on the static Nginx host without extra rewrite configuration.

Pushes to `main` build the app and copy `dist/` to the existing Nginx web root on an Amazon Linux 2023 EC2 instance. Add the repository secrets `EC2_HOST` (instance public IP/DNS) and `EC2_SSH_KEY` (the complete private key contents, including the `BEGIN` and `END` lines). The workflow logs in as `ec2-user`, verifies Nginx and the web root exist, installs `rsync` if needed, and deploys to `/usr/share/nginx/html`.

The EC2 security group must allow SSH (port 22) from GitHub Actions and HTTP (port 80) from site visitors. The public key matching `EC2_SSH_KEY` must already be authorized for `ec2-user`. The workflow looks up the SSH host key with `ssh-keyscan`.
