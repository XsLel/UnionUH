pipeline {
    agent none
    stages {
        stage('Clone Repo') {
            agent { label 'devops' }
            steps {
                git branch: env.BRANCH_NAME,
                credentialsId: 'github-official-credentials',
                url: 'https://github.com/ingSoftwareUmss/turismo-umss.git'
            }
        }
        stage('Compile') {
            agent { docker 'maven:3-alpine' }
            steps {
                echo 'Compile Stage'
                sh 'ls -a'
                sh 'mvn --version'
                sh 'mvn compile'
            }
        }
        stage('Build') {
            agent { docker 'maven:3-alpine' }
            steps {
                echo 'Build Stage'
                sh 'ls -a'
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