pipeline {
    agent none
    stages {
        stage('Example Compile') {
            agent { docker 'maven:3-alpine' }
            steps {
                git branch: env.BRANCH_NAME, url: 'https://github.com/ingSoftwareUmss/turismo-umss.git'
                echo 'Hello, Maven at "${env.BRANCH_NAME}" ===== ' + env.BRANCH_NAME
                sh "ls -a"
                sh 'mvn --version'
            }
        }
        stage('Example Build') {
            agent { docker 'maven:3-alpine' }
            steps {
                echo 'Hello UMSS'
                sh "ls -a"
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