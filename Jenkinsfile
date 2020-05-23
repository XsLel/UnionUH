pipeline {
    agent none
    stages {
        stage('Example Compile') {
            agent { docker 'maven:3-alpine' }
            steps {
                echo 'Hello, Maven at "${env.BRANCH_NAME}" ===== ' + env.BRANCH_NAME
                sh 'mvn --version'
            }
        }
        stage('Example Build') {
            agent { docker 'maven:3-alpine' }
            steps {
                echo 'Hello UMSS'
                sh 'mvn --version'
            }
        }
        //stage('Example Test') {
        //    agent { docker 'openjdk:8-jre' }
        //    steps {
        //        echo 'Hello, JDK'
        //        sh 'java -version'
        //    }
        //}
    }
}