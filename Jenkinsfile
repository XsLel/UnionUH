pipeline {
    def container_name = "llajta_tours"
    def api_port = 8858
    def host_port = 9001
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
                sh './mvnw package -DskipTests=true'
            }
        }

        stage('Build Docker Image') {
            when {
                branch 'devops'
            }
            steps {
                sh "docker image prune --force --all"
                sh "docker build -t ${DOCKER_REPO}/${DOCKER_IMAGE_DEV}:${env.BUILD_NUMBER} ."
                sh "./mvnw clean"
            }
        }

        stage('Push Docker Image') {
            when {
                branch 'devops'
            }
            steps {
                sh "docker push ${DOCKER_REPO}/${DOCKER_IMAGE_DEV}:${env.BUILD_NUMBER}"
            }
        }

        stage('Deploy') {
            agent { label 'deploy' }
            when {
                branch 'devops'
            }
            steps {
                echo 'Deploying'
                sh '''
                    if [ ! "$(docker ps -q -f name=${container_name})" ]; then
                        if [ "$(docker ps -aq -f status=exited -f name=${container_name})" ]; then
                            # cleanup
                            docker rm ${container_name}
                        fi
                        if [ "$(docker ps -aq -f status=up -f name=${container_name})" ]; then
                            docker stop ${container_name}
                            docker rm ${container_name}
                        fi
                    fi
                '''
                sh "docker pull ${DOCKER_REPO}/${DOCKER_IMAGE_DEV}:${env.BUILD_NUMBER}"
                sh "docker run --name ${container_name} -d -p ${host_port}:${api_port} ${DOCKER_REPO}/${DOCKER_IMAGE_DEV}:${env.BUILD_NUMBER}"
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