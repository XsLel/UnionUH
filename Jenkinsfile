pipeline {
    agent { label 'devops' }
    stages {
        stage('Clone Repo') {
            steps {
                git branch: env.BRANCH_NAME,
                credentialsId: 'github-official-credentials',
                url: 'https://github.com/ingSoftwareUmss/turismo-umss.git'
            }
        }
        stage('Compile') {
            steps {
                echo 'Compile Stage'
                sh 'chmod +x ./mvnw'
                sh './mvnw --version'
                sh './mvnw clean compile'
            }
        }
        stage('Build') {
            steps {
                echo 'Build Stage'
                sh 'ls -a'
                sh './mvnw package'
            }
        }

        stage('Build Docker Image') {
            when {
                branch 'dev'
            }
            steps {
                sh "docker build -t ${DOCKER_REPO}/${DOCKER_IMAGE_DEV}:${env.BUILD_NUMBER} ."
            }
        }

        stage('Push Docker Image') {
            when {
                branch 'dev'
            }
            steps {
                sh "docker push ${DOCKER_REPO}/${DOCKER_IMAGE_DEV}:${env.BUILD_NUMBER}"
            }
        }

        stage('Deploy') {
            agent { label 'deploy' }
            when {
                branch 'dev'
            }
            steps {
                echo 'Deploying'
                sh "docker pull ${DOCKER_REPO}/${DOCKER_IMAGE_DEV}:${env.BUILD_NUMBER}"
                sh "docker run --name turismo-umss-dev -d -p 9001:8585 ${DOCKER_REPO}/${DOCKER_IMAGE_DEV}:${env.BUILD_NUMBER}"
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