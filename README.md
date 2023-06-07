# changeset-automation

## To test

1. Branch-out from main, and add changeset using `yarn run changeset add`.
2. Commit those changes and raise a PR to be merged to main.
3. Once the PR has been approved and merged.
 * `release.yml` in main branch will raise another PR named 'Version Packages', and will update this PR perpetually every time a new changeset has been detected in main (I think*).
4. Once the 'Version Packages' PR has been merged.
 * `release.yml` will publish to npm. Please do your build before publishing.