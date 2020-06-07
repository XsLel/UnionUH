pipeline {
    agent { label 'devops' }
    environment {
        CONTAINER_NAME = "llajta_tours-dev"
        API_PORT = 9001
        HOST_PORT = 9001
        CERT_KEY= credentials('turismo-umss-ssl')
    }
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
                sh './mvnw package -P dev -DskipTests=true'
            }
        }

        stage('Build Docker Image') {
            when {
                branch 'dev'
            }
            steps {
                sh "docker image prune --force --all"
                sh "docker build -t ${DOCKER_REPO}/${DOCKER_IMAGE_DEV}:${env.BUILD_NUMBER} ."
                sh "./mvnw clean"
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
                sh '''
                    if [ "$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
                        if [ "$(docker ps -aq -f status=exited -f name=${CONTAINER_NAME})" ]; then
                            # cleanup
                            docker rm ${CONTAINER_NAME}
                        fi
                        if [ ! "$(docker ps -aq -f status=exited -f name=${CONTAINER_NAME})" ]; then
                            docker stop ${CONTAINER_NAME}
                            docker rm ${CONTAINER_NAME}
                        fi
                    fi
                '''
                sh "docker pull ${DOCKER_REPO}/${DOCKER_IMAGE_DEV}:${env.BUILD_NUMBER}"
                sh "docker run --name ${CONTAINER_NAME} --env CERT_KEY=${CERT_KEY} -d -p ${HOST_PORT}:${API_PORT} ${DOCKER_REPO}/${DOCKER_IMAGE_DEV}:${env.BUILD_NUMBER}"
            }
        }
    }

    post {
        always {
            echo 'Sending Email Notifications'
            script {
                def email_list = ""
                def branch = env.BRANCH_NAME
                if (branch == "dev") {
                    email_list = "${TRAINERS_EMAILS}"

                } else if (branch == "devops") {
                    email_list = "${DEVOPS_EMAIL}"
                } else {
                    def team = branch.split("_")[3].toUpperCase()
                    email_list = '${' + team + '}'
                    echo '${' + team + '}'
                    //email_list = ("${team}").toUpperCase
                }

                echo "${email_list}"
                //emailext attachLog: true,
                //body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}",
                //subject: "Jenkins Build ${currentBuild.currentResult}: Job ${env.JOB_NAME}",
                //to: '$ADMIN_EMAIL'
            }
        }
    }
}