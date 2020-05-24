pipeline {
    agent { label 'devops' }
    stages {
        stage('Clone Repo') {
            //agent { label 'devops' }
            steps {
                git branch: env.BRANCH_NAME,
                credentialsId: 'github-official-credentials',
                url: 'https://github.com/ingSoftwareUmss/turismo-umss.git'
            }
        }
        stage('Compile') {
            //agent { docker 'maven:3-alpine' }
            steps {
                echo 'Compile Stage'
                sh 'chmod +x ./mvnw'
                sh './mvnw --version'
                sh './mvnw clean compile'
            }
        }
        stage('Build') {
            //agent { docker 'maven:3-alpine' }
            steps {
                echo 'Build Stage'
                sh 'ls -a'
                sh './mvnw package'
            }
        }

        when {
            branch 'dev'
            environment name: 'DEPLOY_TO', value: 'development'
            stage('Deploy in Dev') {
                steps {
                    echo 'Deploying'
                    sh 'java -jar target/java-project-template-0.0.1-SNAPSHOT.jar'
                }
            }
        }

        stage('Deploy in Branch') {
            steps {
                echo 'Deploying'
                sh 'java -jar target/java-project-template-0.0.1-SNAPSHOT.jar'
            }
        }
    }
}