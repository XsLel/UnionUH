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

        stage('Build Docker Image') {
            sh "docker build -t 192.168.88.11:8083/turismo-umss-dev:BUILD_NUMBER ."
        }

        stage('Push Docker Image') {
            sh "docker push 192.168.88.11:8083/turismo-umss-dev:BUILD_NUMBER"
        }

        stage('Deploy') {
            agent { label 'master' }
            when {
                branch 'devops'
            }
            steps {
                echo 'Deploying'
                //sh 'java -jar target/java-project-template-0.0.1-SNAPSHOT.jar'
                sh "docker pull 192.168.88.11:8083/turismo-umss-dev:BUILD_NUMBER"
                sh "docker run --name turismo-umss-dev -d -p 9001:8585 192.168.88.11:8083/turismo-umss-dev:BUILD_NUMBER"
            }
        }
    }

    post {
        always {
            echo 'I will always say Hello again!'
            emailext attachLog: true, body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}",
                subject: "Jenkins Build ${currentBuild.currentResult}: Job ${env.JOB_NAME}", to: '$ADMIN_EMAIL'
        }
    }
}