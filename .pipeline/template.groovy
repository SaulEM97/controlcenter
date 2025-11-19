// JTE Pipeline Template

node {
    stage('Checkout') {
        deleteDir()

        checkout([
            $class: 'GitSCM',
            branches: [[name: '*/main']],
            userRemoteConfigs: [[
                url: 'https://github.com/SaulEM97/controlcenter.git'
            ]]
        ])
    }

    stage('Load stages') {
        def buildStage  = load ".pipeline/stages/build.groovy"
        def testStage   = load ".pipeline/stages/test.groovy"
        def deployStage = load ".pipeline/stages/deploy.groovy"

        stage('Build')  { buildStage.buildStage() }
        stage('Test')   { testStage.testStage() }
        stage('Deploy') { deployStage.deployStage() }
    }
}

