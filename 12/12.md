## Semantic Versioning
*Semantic Versioning is a standart that allow us to know what are the changes that has occured and the new version of hte package*

"version": "1.0.0", // major_version.minor_version.patch_version
*For example `lodash` in ../11/ is version: `^4.17.21`*

*If tommorow is:*
1. `^4.17.22` - That will mean the pach version is updated - which means that are **impemented some bug fixes**.
2.  `^4.18.21` - That will mean the minor version is updated - which means that are **added some new functionallities**, And might deprecate some of the old functionalities, but you can still use them. **The update is Non- Breaking change.**
3.  `^5.0.0` - That will mean the major version is updated - which means that **there is a Breaking change**. The version `5.0.0` is not compatible with the version `4.17.21` or any version of `4`.

*`^` and `~` symbols in front of the version: - Rules*
1. `^4.17.21` I don't want any `Major` updates, but if there is a `minor` Update or `patch` update, go ahead and download this updates. **This means: `4.x.x`** 
2.  `~4.17.21` I don't want any `Major` updates or any `minor` Update , but if there is a  `patch` update, go ahead and download this update. **This means: `4.17.x`** 
3. `4.17.21` I don't want any updates, and the only version will be: **`4.17.21`** 