def buildStage() {
    sh """
        rm -rf node_modules package-lock.json
        npm install --ignore-scripts
    """
}

return this

