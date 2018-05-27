module.exports = {
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A Vue.js Lib"
        },
        "author": {
            "type": "string",
            "message": "Author"
        }
    },
    "filters": {},
    "skipInterpolation": ["src/**/!(App).vue", "docs/**/*"],
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev"
};
