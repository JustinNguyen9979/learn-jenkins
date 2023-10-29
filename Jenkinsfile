pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/JustinNguyen9979/learn-jenkins.git'
            }
        }
        stage('Build') {
            steps {
                withDockerRegistry(credentialsId: 'Docker-Hub-Login', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t 997909799/learn-jenkins:V1.01 .'
                    sh 'docker push 997909799/learn-jenkins:V1.01' //note asacac
                }
            }

        }

        // stage("SSH Agent") {
        //     steps {
        //         sshagent(['SSH-Agent-Remote-Justin']) {
        //             sh 'ssh -o StrictHostKeyChecking=no -l justin 192.168.1.112 touch demo-jenkins.txt'
        //         }
        //     }
        // }
        
        // stage("SSH Agent") {
        //     steps {
        //         sshPublisher(publishers: [sshPublisherDesc(configName: 'SSH-Remote-Justin', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'cp app.js app-test.js', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'app.js')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
        //     }
        // }
    }
}
