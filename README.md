This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

NEXTAUTH_URL="http://localhost:3000"

NEXT_PUBLIC_GRAPHCMS_ENDPOINT="https://api-sa-east-1.hygraph.com/v2/cl9oqikym0vg701ur4a1eh1ry/master"
NEXT_PUBLIC_GRAPHCMS_TOKEN="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjY3ODMxMDUsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w5b3Fpa3ltMHZnNzAxdXI0YTFlaDFyeS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNzMyNTc0N2UtYmY5Mi00MWYzLTkwNzktZmVhN2IwNzkyNWZmIiwianRpIjoiY2w5cGptaXZtMW9oMzAxdXNjOGZsZmlrYSJ9.hlvA7rWOHJjuMgkNDJRKYR3M495Yyhj6ccxYaGuuIt_4tqOpSYWahwnGAkGgACg9if6E_hpFIV37dayWDo4B6eSrwPYc5EPFtljpFBFhpgDn7jQWMWkKLrwrxM-zwNmZ7HGRyWfEYOt7_AvZWCYIZPHFeee1wOLSrCJRmwpGOuU-W-g4cwPs1S45e_1fVa_Nfg5TdSmOSFX9USFeX89BHqoj5w5DA3W67k0UPbUf3taM_Yes7ev-IsePET5t4DQr8E6ZQ_1oPkNBuocbkmfALnsRD1II_Oiufhr3Mu-xghFQi0Zvl0iqKKgcOVMTjvorfEf7IwUC_3dEln8Py6szUU7HxIK98wwFlEe-JssoHNUWEox5-6YankbmZevfQ3AJtBE5_SBpocgtzNxF6675azeeEhWqYRYCWhqyp7hoWUOBhJnX6UldGw0U92Dk1Kgk55B3jwJ0VK5UpexWX-cQ8EYTAYdxWXjE9sksi2LUqYBi7R5mdd97tSvbE21a6pHi2z9bf1kRS-eVzmWM18il3c7_6rSZOed0I6l5mYihzInTtMjDcFOjRkNJ0vx-8TD-CiIKQH_g4iYR4t6XGzUcqe_Fh-hd4d5iU7vycOUbvvvdSwNr-K3ZPuKDDNVy7eJzXrNzYIJfomAlioWr9eVcRrm2EUtk0a4-zVx2WTeXz0s"
NEXT_PUBLIC_SUPABASE_URL=https://api-sa-east-1.hygraph.com/v2/cl9oqikym0vg701ur4a1eh1ry/master
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjY3ODMxMDUsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w5b3Fpa3ltMHZnNzAxdXI0YTFlaDFyeS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNzMyNTc0N2UtYmY5Mi00MWYzLTkwNzktZmVhN2IwNzkyNWZmIiwianRpIjoiY2w5cGptaXZtMW9oMzAxdXNjOGZsZmlrYSJ9.hlvA7rWOHJjuMgkNDJRKYR3M495Yyhj6ccxYaGuuIt_4tqOpSYWahwnGAkGgACg9if6E_hpFIV37dayWDo4B6eSrwPYc5EPFtljpFBFhpgDn7jQWMWkKLrwrxM-zwNmZ7HGRyWfEYOt7_AvZWCYIZPHFeee1wOLSrCJRmwpGOuU-W-g4cwPs1S45e_1fVa_Nfg5TdSmOSFX9USFeX89BHqoj5w5DA3W67k0UPbUf3taM_Yes7ev-IsePET5t4DQr8E6ZQ_1oPkNBuocbkmfALnsRD1II_Oiufhr3Mu-xghFQi0Zvl0iqKKgcOVMTjvorfEf7IwUC_3dEln8Py6szUU7HxIK98wwFlEe-JssoHNUWEox5-6YankbmZevfQ3AJtBE5_SBpocgtzNxF6675azeeEhWqYRYCWhqyp7hoWUOBhJnX6UldGw0U92Dk1Kgk55B3jwJ0VK5UpexWX-cQ8EYTAYdxWXjE9sksi2LUqYBi7R5mdd97tSvbE21a6pHi2z9bf1kRS-eVzmWM18il3c7_6rSZOed0I6l5mYihzInTtMjDcFOjRkNJ0vx-8TD-CiIKQH_g4iYR4t6XGzUcqe_Fh-hd4d5iU7vycOUbvvvdSwNr-K3ZPuKDDNVy7eJzXrNzYIJfomAlioWr9eVcRrm2EUtk0a4-zVx2WTeXz0s