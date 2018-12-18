'use strict';

/*
Author: Fortinet
*
* @abstract
* Class used to define the capabilities required from cloud platform.
*/
module.exports = class CloudPlatform {
    throwNotImplementedException() {
        throw new Error('Not Implemented');
    }
    /* eslint-disable no-unused-vars */
    /**
     * Initialize (and wait for) any required resources such as database tables etc.
     * Abstract class method.
     */
    async init() {
        await this.throwNotImplementedException();
    }

    /**
     * Submit an election vote for this ip address to become the master.
     * Abstract class method.
     * @param {String} ip Ip of the FortiGate which wants to become the master
     * @param {String} purgeMasterIp Ip of the dead master we should purge before voting
     */
    async putMasterElectionVote(ip, purgeMasterIp) {
        await this.throwNotImplementedException();
    }
    /**
     * Get the ip address which won the master election.
     * Abstract class method.
     * @returns {String} Ip of the FortiGate which should be the auto-sync master
     */
    async getElectedMaster() {
        await this.throwNotImplementedException();
    }
    /**
     * Get all existing lifecyle actions for a FortiGate instance from the database.
     * Abstract class method.
     * @param {String} instanceId Instance ID of a FortiGate.
     * @returns {LifecycleItem} Item used by the platform to complete a lifecycleAction.
     */
    async getLifecycleItems(instanceId) {
        await this.throwNotImplementedException();
    }
    /**
     * Update one life cycle action item hooked with an instance.
     * Abstract class method.
     * @param {LifecycleItem} item Item used by the platform to complete
     *  a lifecycleAction.
     */
    async updateLifecycleItem(item) {
        await this.throwNotImplementedException();
    }
    /**
     * Clean up database the current LifeCycleItem entries (or any expired entries).
     * Abstract class method.
     * @param {LifecycleItem} [items] an array of LifeCycleItem to remove from database.
     * When provided, only the list of items will be cleaned up, otherwise scan for expired
     *  items to purge.
     */
    async cleanUpDbLifeCycleActions(items = []) {
        await this.throwNotImplementedException();
    }
    /**
     * Get the url for the callback-url portion of the config.
     * Abstract class method.
     * @param {Object} fromContext a context object to get the url, if needed.
     */
    async getCallbackEndpointUrl(fromContext = null) {
        await this.throwNotImplementedException();
    }

    /**
     * Lookup the instanceid using an ip address.
     * Abstract class method.
     * @param {String} ip Local ip address of an instance.
     */
    async findInstanceIdByIp(ip) {
        await this.throwNotImplementedException();
    }

    /**
     * Extract useful info from request event.
     * @param {Object} request the request event
     * @returns {Object} an object of required info per platform.
     */
    extractRequestInfo(request) {
        this.throwNotImplementedException();
        return {};
    }

    /**
     * Protect an instance from being scaled out.
     * Abstract class method.
     * @param {LifecycleItem} item Item that was used by the platform to complete a
     *  lifecycle action
     * @param {boolean} [protect=true] Whether to add or remove or protection the instance.
     */
    async protectInstanceFromScaleIn(item, protect = true) {
        await this.throwNotImplementedException();
    }

    /**
     * List all instances with given parameters.
     * Abstract class method.
     * @param {Object} parameters parameters necessary for listing all instances.
     */
    async listAllInstances(parameters) {
        await this.throwNotImplementedException();
    }

    /**
     * Describe an instance and retrieve its information, with given parameters.
     * Abstract class method.
     * @param {Object} parameters parameters necessary for describing an instance.
     */
    async describeInstance(parameters) {
        await this.throwNotImplementedException();
    }

    /**
     * do the instance health check.
     * Abstract class method.
     * @param {Object} instance the platform-specific instance object
     * @param {Number} heartBeatInterval the expected interval (second) between heartbeats
     * @returns {Object}
     *      {healthy: <bool>, heartBeatLossCount: <int>, nextHeartBeatTime: <int>}
     */
    async getInstanceHealthCheck(instance, heartBeatInterval) {
        await this.throwNotImplementedException();
    }

    /**
     * update the instance health check result to DB.
     * Abstract class method.
     * @param {Object} healthCheckObject update based on the healthCheckObject got by return from
     * getInstanceHealthCheck
     * @param {Number} heartBeatInterval the expected interval (second) between heartbeats
     * @param {Number} checkPointTime the check point time of when the health check is performed.
     * @returns {bool} resul: true or false
     */
    async updateInstanceHealthCheck(healthCheckObject, heartBeatInterval, checkPointTime) {
        await this.throwNotImplementedException();
    }

    /**
     * delete the instance health check monitoring record from DB.
     * Abstract class method.
     * @param {Object} instanceId the instanceId of instance
     * @returns {bool} resul: true or false
     */
    async deleteInstanceHealthCheck(instanceId) {
        await this.throwNotImplementedException();
    }

    /**
     * Delete one or more instances from the auto scaling group.
     * Abstract class method.
     * @param {Object} parameters parameters necessary for instance deletion.
     */
    async deleteInstances(parameters) {
        await this.throwNotImplementedException();
    }

    async createNetworkInterface(parameters) {
        await this.throwNotImplementedException();
    }

    async deleteNetworkInterface(parameters) {
        await this.throwNotImplementedException();
    }

    async describeNetworkInterface(parameters) {
        await this.throwNotImplementedException();
    }

    async attachNetworkInterface(instance, nic) {
        await this.throwNotImplementedException();
    }

    async detachNetworkInterface(instance, nic) {
        await this.throwNotImplementedException();
    }

    async getNicAttachmentRecord(instanceId) {
        await this.throwNotImplementedException();
    }

    async updateNicAttachmentRecord(instanceId, nicId, state, conditionState = null) {
        await this.throwNotImplementedException();
    }

    async deleteNicAttachmentRecord(instanceId, conditionState = null) {
        await this.throwNotImplementedException();
    }

    async getSettingItem(key) {
        await this.throwNotImplementedException();
    }

    async setSettingItem(key, jsonValue) {
        await this.throwNotImplementedException();
    }

    /**
     * return a platform-specific logger class
     */
    getPlatformLogger() {
        this.throwNotImplementedException();
    }
    /* eslint-enable no-unused-vars */
};
