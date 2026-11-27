# Portfolio workflow

- Treat requested portfolio updates as ready for publication. Make the requested changes, run the relevant checks, commit the in-scope files on `main`, and push to `origin/main` without asking for separate approval. Follow any explicit instruction to hold publication or request review first.
- Let the existing GitHub Actions workflow deploy to GitHub Pages. Wait for publication to finish and check the requested changes on the live site.
- For CV updates, replace the downloadable PDF, regenerate its preview images, and update the CV date and affected English and Vietnamese content as needed. Check that the live download matches the source PDF and that the preview pages load.
- Preserve unrelated work and remove temporary files and processes created for the task. Confirm the final git status and report any remaining issue.
